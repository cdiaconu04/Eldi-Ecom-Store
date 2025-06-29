import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    // const { priceId, personalizations, productName } = await req.json();
    const products = await req.json()

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['CA', 'US', 'GB'],
            },
            line_items: products.map((product) => ( // To allow for buying multiple products
                {
                    price: product.priceId,
                    quantity: 1,
                }
            )),
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            payment_intent_data: {
                metadata: Object.assign(
                    {},
                    ...products.map((product, index) => ({
                        [`product_${index + 1}_name`]: product.productName,
                        [`product_${index + 1}_personalization_1`]: product.personalizations?.[0] || '',
                        [`product_${index + 1}_personalization_2`]: product.personalizations?.[1] || '',
                    }))
                )
                
                
            }
        });

        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}
