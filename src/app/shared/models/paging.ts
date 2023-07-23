export interface Pagintation<T>{
    pageIndex?: number;
    pageSize?: number;  
    count: number;
    data: T
}
