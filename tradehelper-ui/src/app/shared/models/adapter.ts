export interface Adapter<T> {
    /**
     * Used to map http requests to objects
     *
     * @param {*} item Item to be adapted to local class
     * @return {*}  {T} Item after it has been adapted
     */
    adapt(item: any): T;
}