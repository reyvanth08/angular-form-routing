import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { FirstComponent } from './compoenents/first/first.component';
import { SecondComponent } from './compoenents/second/second.component';
import { PageNotFoundComponent } from './compoenents/page-not-found/page-not-found.component';
import { HomeComponentComponent } from './compoenents/home-component/home-component.component';
import { Child1ComponentComponent } from './compoenents/child1-component/child1-component.component';
import { Child2ComponentComponent } from './compoenents/child2-component/child2-component.component';
const routes: Routes = [
    {
        path: 'first-component',
        title: 'First',
        component: FirstComponent,
        children: [
            {
                path: 'child-1',
                title: 'Child 1',
                component: Child1ComponentComponent,
            },
            {
                path: 'child-2',
                title: 'Child 2',
                component: Child2ComponentComponent,
            },
        ],
    },
    { path: 'second-component', title: 'Second', component: SecondComponent },
    {
        path: 'home-component',
        title: 'Home',
        component: HomeComponentComponent,
    },
    { path: '', redirectTo: 'home-component', pathMatch: 'full' },
    { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
