import { Component, EventEmitter, Output } from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';

@Component ({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
