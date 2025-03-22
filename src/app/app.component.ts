import { Component, computed, Host, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import{MatSidenavModule}from '@angular/material/sidenav'
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, CustomSidenavComponent],
  template: `
    
    <mat-toolbar class="mat-elevation-z3">
   <button mat-icon-button (click)="collapsed.set(!collapsed())">
    <mat-icon>menu</mat-icon>
   </button>
    </mat-toolbar>
<mat-sidenav-container>
  <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
    <app-custom-sidenav [collapsed]="collapsed()"/>
  </mat-sidenav>
  <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
  <router-outlet />
  </mat-sidenav-content>
</mat-sidenav-container>
    
  `,
  styles: [
`
    :host ::ng-deep * {
        transition: all 500ms ease-in-out;
      }
    mat-toolbar{
      position:relative;
      z-index:5
    }
    mat-sidenav-container{
      height: calc(100vh - 64px);
    }
    .content{
      padding:24px;
    }
    mat-sidenav,mat-sidenav-content{
      transition : all 5000ms ease-in-out
    }
 ` ],
})
export class AppComponent {
  title = 'sidebar';
  collapsed=signal(false)

  sidenavWidth = computed(()=> this.collapsed() ? '65px':'250px')
}
