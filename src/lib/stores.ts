import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';

interface SelectedItem {
    name: string;
    element: HTMLElement;
}

export const selected : Writable<SelectedItem[]> = writable([]);