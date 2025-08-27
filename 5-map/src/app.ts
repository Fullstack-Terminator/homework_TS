class Maps {
    buckets: Array<Array<{key: number | string, value: number | string}>> = Array(8).fill(null).map(() => []);

    hash(key: number | string): number {
        let result = 0;

        if (typeof key === 'string') {
            for (let i = 0; i < key.length; i++) {
                result += key.charCodeAt(i);
            }
        } else if (typeof key === 'number') {
            result = key
        }
        return result;
    }

    getBucket(key: number | string): number | undefined {
        return Math.abs(this.hash(key) % this.buckets.length);
    }

    set(key: number | string, value: number | string): void {
        const index = this.getBucket(key);
        if (index === undefined) return;

        let bucket = this.buckets[index];
        const existingItem = bucket.find(item => item.key === key);

        if (existingItem) existingItem.value = value;
        else bucket.push({ key, value });
    }

    delete(key: number | string): void {
        const index = this.getBucket(key);
        if (index === undefined) return;

        let bucket = this.buckets[index];
        const existingItem = bucket.find(item => item.key === key);

        if (existingItem) {
            this.buckets[index] = bucket.filter(item => item.key !== key);
        }
        else return;
    }

    get(key: number | string): number | string | undefined {
        const index = this.getBucket(key);
        if (index === undefined) return;

        let bucket = this.buckets[index];
        const existingItem = bucket.find(item => item.key === key);

        if (existingItem) {
            return existingItem.value;
        } 
        else return undefined;
    }

    clear() {
        this.buckets = Array(8).fill(null).map(() => []);
    }
}

const map = new Maps();
map.set(1, 'Anna');
map.set(142, 'Andfgdsfgna');
map.set(142, 'g srg feidsrgfj');
map.get(1421231);
map.delete(142);
console.log(map.buckets);

const result = new Map();