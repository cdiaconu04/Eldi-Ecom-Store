import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
    try {
        const products = await stripe.products.list({ limit: 10 });

        const productData = await Promise.all(
            products.data.map(async (product) => {
                const prices = await stripe.prices.list({ product: product.id });
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    image: product.images[0],
                    price: prices.data[0],
                    priceID: product.priceID
                };
            })
        );

        return new Response(JSON.stringify(productData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}

