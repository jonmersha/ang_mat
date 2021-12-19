export interface ItemCategoryResponse{
    Status:string;
    details:CategoryDetail[] 
}
export interface CategoryDetail{
    category_id:number;
    Retailer_id:number;
    Name:string;
    Description:string;
}

export interface ItemCategory{
    tableName:string;
    data:CategoryData[]
}
export interface CategoryData{
    Retailer_id:number;
    Name:string;
    Description:string;


}
