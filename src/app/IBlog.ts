export interface RootObject {
    error: boolean;
    message: string;
    status: number;
    data: DataItem[];
}
interface DataItem {
    blogId: string;
    lastModified: string;
    created: string;
    tags: any[];
    author: string;
    category: string;
    isPublished: boolean;
    views: number;
    bodyHtml: string;
    description: string;
    title: string;
}