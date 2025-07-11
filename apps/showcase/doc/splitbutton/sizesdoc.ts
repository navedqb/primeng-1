import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'sizes-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>SplitButton provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-center gap-4">
            <p-toast />
            <p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
            <p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
            <p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />
        </div>
        <app-code [code]="code" selector="split-button-sizes-demo"></app-code>
    `,
    providers: [MessageService]
})
export class SizesDoc {
    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    items: MenuItem[];

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }

    code: Code = {
        basic: `<p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
<p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
<p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />`,

        html: `<div class="card flex flex-wrap gap-4 justify-center">
    <p-toast />
    <p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
    <p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
    <p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-sizes-demo',
    templateUrl: './split-button-sizes-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonSizesDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`
    };
}
