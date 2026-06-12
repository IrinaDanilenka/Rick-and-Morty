export enum Status {
    ALIVE = 'alive',
    DEAD = 'dead',
    UNKNOWN = 'unknown'
}

export const STATUS_LABELS: Record<Status, string> = {
    [Status.ALIVE]: 'Alive',
    [Status.DEAD]: 'Dead',
    [Status.UNKNOWN]: 'Unknown'
};
