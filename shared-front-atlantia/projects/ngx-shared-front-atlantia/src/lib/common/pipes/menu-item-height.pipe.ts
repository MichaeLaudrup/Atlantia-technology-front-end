import { Pipe, PipeTransform } from "@angular/core";
import { VerticalMenuItem } from "../interfaces";
import { linkStatus } from "../enums";

@Pipe({
  name: 'calcVerticalMenuItemSize'
})
export class MenuItemSizePipe implements PipeTransform {
  transform(item: VerticalMenuItem, isSomeLinkHovered: boolean, totalItems: number, isSomeLinkSelected: boolean, isHeight: boolean): string { 
    switch(item.status) {
      case linkStatus.SELECTED: 
        return '100%';
      case linkStatus.HOVER: 
        return `calc((100% / ${totalItems}) + ${(totalItems - 1) * 3}%)`;
      default:
        if(isSomeLinkSelected) {
          return '0%'; 
        } else if(isSomeLinkHovered) {
          return `calc((100% / ${totalItems}) - 3%)`;
        } else {
          return `calc((100% / ${totalItems}))`;
        }
    }
  }
}