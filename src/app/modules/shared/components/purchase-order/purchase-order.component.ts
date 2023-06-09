import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';
import { map } from 'rxjs/operators';
import {
  GraphQlPageableInput,
  PurchaseOrderEntity,
  PurchaseOrderInfoGQL,
  PurchaseOrderItemEntity
} from '../../../../../generated/graphql';
import { DialogComponent } from '../dialog/dialog.component';
import { QueryOptionsAlone } from 'apollo-angular/types';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  @Input() parentRef: DialogComponent<PurchaseOrderComponent>;
  @Input() purchaseOrder: PurchaseOrderEntity;
  loading = true;
  tab = 0;
  itemsPageable: GraphQlPageableInput = {
    page: 1,
    pageSize: 10
  };
  faExclamationCircle = faExclamationCircle;

  constructor(
    private purchaseOrderInfoGQL: PurchaseOrderInfoGQL,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.info();
  }

  info() {
    this.purchaseOrderInfoGQL
      .fetch(
        {
          id: this.purchaseOrder.id
        },
        { fetchPolicy: 'network-only' } as QueryOptionsAlone<any>
      )
      .pipe(map((result) => result.data.purchaseOrderInfo))
      .subscribe(
        (result) => {
          this.purchaseOrder = result as PurchaseOrderEntity;
          this.loading = false;
        },
        (error) => {
          console.error(error);
          this.loading = false;
        }
      );
  }

  goToReceiving(purchaseOrderItem: PurchaseOrderItemEntity) {
    const queryParams = {
      id: purchaseOrderItem.simpleProduct.id,
      purchaseOrderItemId: purchaseOrderItem.id
    };
    this.router.navigate(['/receiving'], { queryParams });
    this.parentRef.pressOK();
  }
}
