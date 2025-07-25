import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'controlled-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Menu items can be controlled programmatically.</p>
        </app-docsectiontext>
        <div class="card flex flex-col items-center gap-4">
            <p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
            <p-panelmenu [model]="items" class="w-full md:w-80" />
        </div>
        <app-code [code]="code" selector="panel-menu-controlled-demo"></app-code>
    `
})
export class ControlledDoc implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                key: '0',
                label: 'Users',
                icon: 'pi pi-users',
                items: [
                    {
                        key: '0_1',
                        label: 'New',
                        items: [
                            {
                                key: '0_1_0',
                                label: 'Member'
                            },
                            {
                                key: '0_1_1',
                                label: 'Group'
                            }
                        ]
                    },
                    {
                        key: '0_2',
                        label: 'Search'
                    }
                ]
            },
            {
                key: '1',
                label: 'Tasks',
                icon: 'pi pi-server',
                items: [
                    {
                        key: '1_0',
                        label: 'Add New'
                    },
                    {
                        key: '1_1',
                        label: 'Pending'
                    },
                    {
                        key: '1_2',
                        label: 'Overdue'
                    }
                ]
            },
            {
                key: '2',
                label: 'Calendar',
                icon: 'pi pi-calendar',
                items: [
                    {
                        key: '2_0',
                        label: 'New Event'
                    },
                    {
                        key: '2_1',
                        label: 'Today'
                    },
                    {
                        key: '2_2',
                        label: 'This Week'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }

    code: Code = {
        basic: `<p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" class="w-full md:w-80" />`,

        html: `<div class="card flex justify-center">
    <p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
    <p-panelmenu [model]="items" class="w-full md:w-80" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'panel-menu-controlled-demo',
    templateUrl: './panel-menu-controlled-demo.html',
    standalone: true,
    imports: [PanelMenu, ButtonModule]
})
export class PanelMenuControlledDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                key: '0',
                label: 'Users',
                icon: 'pi pi-users',
                items: [
                    {
                        key: '0_1',
                        label: 'New',
                        items: [
                            {
                                key: '0_1_0',
                                label: 'Member'
                            },
                            {
                                key: '0_1_1',
                                label: 'Group'
                            }
                        ]
                    },
                    {
                        key: '0_2',
                        label: 'Search'
                    }
                ]
            },
            {
                key: '1',
                label: 'Tasks',
                icon: 'pi pi-server',
                items: [
                    {
                        key: '1_0',
                        label: 'Add New'
                    },
                    {
                        key: '1_1',
                        label: 'Pending'
                    },
                    {
                        key: '1_2',
                        label: 'Overdue'
                    }
                ]
            },
            {
                key: '2',
                label: 'Calendar',
                icon: 'pi pi-calendar',
                items: [
                    {
                        key: '2_0',
                        label: 'New Event'
                    },
                    {
                        key: '2_1',
                        label: 'Today'
                    },
                    {
                        key: '2_2',
                        label: 'This Week'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }
}`
    };
}
