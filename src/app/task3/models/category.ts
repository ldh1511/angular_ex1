export class Category {
    constructor(
        categoryId: number,
        categoryName: string,
        userId: number,
        parent_cate_id: number,
        date: string,
        created_at: string,
        updated_at: string,
        status: number,
        share_status: number,
        share_hash: string,
    ) {
        this.categoryId=categoryId;
        this.categoryName= categoryName;
        this.userId= userId;
        this.parent_cate_id= parent_cate_id;
        this.date= date;
        this.created_at= created_at;
        this.updated_at= updated_at;
        this.status= status;
        this.share_status= share_status;
        this.share_hash= share_hash;
    }
    categoryId: number;
    categoryName: string;
    userId: number;
    parent_cate_id: number;
    date: string;
    created_at: string;
    updated_at: string;
    status: number;
    share_status: number;
    share_hash: string;
}