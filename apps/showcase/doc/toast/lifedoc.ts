import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'life-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>A toast disappears after 3000ms by default, set the <i>life</i> option on either the message or toast to override this.</p>
        </app-docsectiontext>
        <div class="card flex justify-center gap-2">
            <p-toast [life]="10000" />
        </div>
        <app-code [code]="code" selector="toast-life-demo"></app-code>
    `,
    providers: [MessageService]
})
export class LifeDoc {
    constructor(private messageService: MessageService) {}

    showLife() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
    }

    showLifeLong() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
    }

    code: Code = {
        basic: `<p-toast [life]="10000" />
<p-button
    (click)="showLife()"
    label="Show Life" />
<p-button
    (click)="showLifeLong()"
    label="Show Life Long" />`,
        html: `<div class="card flex justify-center">
    <p-toast [life]="10000" />
    <p-button
        (click)="showLife()"
        label="Show Life" />
    <p-button
        (click)="showLifeLong()"
        label="Show Life Long" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-life-demo',
    templateUrl: './toast-life-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastLifeDemo {
    constructor(private messageService: MessageService) {}

    showLifeDefault() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
    }

    showLifeLong() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
    }
}`
    };
}
