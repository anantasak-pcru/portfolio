import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'giftshop-java',
    loadChildren: () => import('./page/giftshop-java/giftshop-java.module').then( m => m.GiftshopJavaPageModule)
  },
  {
    path: 'viu',
    loadChildren: () => import('./page/viu/viu.module').then( m => m.ViuPageModule)
  },
  // {
  //   path: 'laravel',
  //   loadChildren: () => import('./page/laravel/laravel.module').then( m => m.LaravelPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
