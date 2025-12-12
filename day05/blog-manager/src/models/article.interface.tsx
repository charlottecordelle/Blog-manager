export interface Article {
    id: string | number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    category: Category;
}

export enum Category {
    APPRENTISSAGE = 'Apprentissage',
    PROJETS = 'Projets',
    CARRIERE = 'Carrière',
    VIE_ETUDIANTE='Vie Étudiante',
    TRENDS='Trends'
}