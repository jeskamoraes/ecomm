import { randomUUID } from 'node:crypto';

export const productExample = {
    user_id: randomUUID(),
    name: 'Notebook Dell',
    value:6500.00,
    quantity: 3,
    description: 'Notebook Dell',
    category: 'Eletrônicos',
    features: [
        {
            name: 'cor',
            description: 'preto',
        },
        {
            name: 'memória',
            description: '16 GB',
        }
    ],
    images: [
        {
            url: 'url-da-imagem.jpg',
            description: 'Notebook Dell',
        }
    ],
}