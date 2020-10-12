import { valueConverter } from 'aurelia-framework';

@valueConverter('hostname')
export class HostnameValueConverter {
    private readonly anchor = document.createElement('a');

    toView(url: string): string | undefined {
        this.anchor.href = url;

        if (this.anchor.hostname !== location.hostname) {
            return `(${this.anchor.hostname.replace('www.', '')})`;
        }
    }
}
