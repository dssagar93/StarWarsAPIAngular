import { NgModule } from "@angular/core";

import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';

import { RouterModule } from '@angular/router';


const routes = [
    {
        path: 'characters', component: TabsComponent, children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: ':side', component: ListsComponent }
        ]
    },
    { path: 'AddCharacter', loadChildren: './create-character/create-character.module#CreateCharacterModule' },
    { path: '**', redirectTo: '/characters' }
]




@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]


})
export class AppRoutingModule {

}