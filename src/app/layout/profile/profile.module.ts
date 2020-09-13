import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ProfileRoutingModule,
        FormsModule,
        CommonModule,
    ],
    entryComponents: [],
    declarations: [ProfileComponent]
})
export class ProfileModule {}
