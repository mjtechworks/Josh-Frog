import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { CapacitorSocketMobile, CapacitorZebraScanner } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  private barcodeScanners: BarcodeScannerEvent[] = [];
  private barcodeScannersSubject$ = new BehaviorSubject<BarcodeScannerEvent[]>(
    this.barcodeScanners
  );
  public barcodeScannersChanged$ = this.barcodeScannersSubject$.asObservable();

  private lastBarcodeDataEvent: BarcodeDataEvent;
  private barcodeDataSubject$ = new BehaviorSubject<BarcodeDataEvent>(
    this.lastBarcodeDataEvent
  );
  public barcodeDataChanged$ = this.barcodeDataSubject$.asObservable();

  private lastUpcEvent: string;
  private upcDataSubject$ = new BehaviorSubject<string>(this.lastUpcEvent);
  public upcScanned$ = this.upcDataSubject$.asObservable();

  private lastSkuEvent: string;
  private skuDataSubject$ = new BehaviorSubject<string>(this.lastSkuEvent);
  public skuScanned$ = this.skuDataSubject$.asObservable();

  private lastBinEvent: string;
  private binDataSubject$ = new BehaviorSubject<string>(this.lastBinEvent);
  public binScanned$ = this.binDataSubject$.asObservable();

  private lastOrderEvent: string;
  private shipmentDataSubject$ = new BehaviorSubject<string>(
    this.lastOrderEvent
  );
  public shipmentScanned$ = this.shipmentDataSubject$.asObservable();

  private loopTimer: number;
  private windowRef: Window;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform
  ) {
    this.windowRef = this.document.defaultView;
    if (platform.is('capacitor')) {
      CapacitorSocketMobile.addListener(
        'barcodeDataEvent',
        (barcodeDataEvent: BarcodeDataEvent) => {
          this.barcodeDataSubject$.next(barcodeDataEvent);

          if (barcodeDataEvent.type === 'UPC A') {
            this.shipmentDataSubject$.next(null);
            this.binDataSubject$.next(null);
            this.skuDataSubject$.next(null);
            this.upcDataSubject$.next(barcodeDataEvent.data);
          } else if (barcodeDataEvent.type === 'Code 128') {
            if (barcodeDataEvent.data.charAt(0) === '#') {
              this.shipmentDataSubject$.next(null);
              this.skuDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.binDataSubject$.next(barcodeDataEvent.data.substr(1));
            } else if (barcodeDataEvent.data.charAt(0) === '*') {
              this.shipmentDataSubject$.next(null);
              this.binDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.skuDataSubject$.next(barcodeDataEvent.data.substr(1));
            } else {
              this.binDataSubject$.next(null);
              this.skuDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.shipmentDataSubject$.next(barcodeDataEvent.data);
            }
          } else if (barcodeDataEvent.type === 'Code 39') {
            this.shipmentDataSubject$.next(null);
            this.skuDataSubject$.next(barcodeDataEvent.data);
            this.upcDataSubject$.next(null);
            this.binDataSubject$.next(null);
          }
        }
      );

      CapacitorSocketMobile.addListener(
        'deviceConnectionEvent',
        (barcodeScannerEvent: BarcodeScannerEvent) => {
          console.log(
            'deviceConnectionEvent',
            JSON.stringify(barcodeScannerEvent)
          );
          let found = false;
          for (const device of this.barcodeScanners) {
            if (device.serial === barcodeScannerEvent.serial) {
              found = true;
            }
          }
          if (!found) {
            this.barcodeScanners = this.barcodeScanners.concat(
              barcodeScannerEvent
            );
          }
          this.barcodeScannersSubject$.next(this.barcodeScanners);
        }
      );

      CapacitorSocketMobile.addListener(
        'deviceDisconnectionEvent',
        (barcodeScannerEvent: BarcodeScannerEvent) => {
          console.log(
            'deviceDisconnectionEvent',
            JSON.stringify(barcodeScannerEvent)
          );

          for (let i = 0; i < this.barcodeScanners.length; ) {
            if (this.barcodeScanners[i].serial === barcodeScannerEvent.serial) {
              this.barcodeScanners.splice(i, 1);
            } else {
              ++i;
            }
          }
          this.barcodeScannersSubject$.next(this.barcodeScanners);
        }
      );
      CapacitorSocketMobile.start();
    }
    if (platform.is('electron')) {
      CapacitorZebraScanner.start();
      this.loop();
    }
  }

  loop(): void {
    this.windowRef.clearTimeout(this.loopTimer);
    // This loop only runs on Windows/Electron
    // there isn't a clean way to callback from NAN
    const d = CapacitorZebraScanner.check();
    if (d.success) {
      const barcodeDataEvent = new BarcodeDataEvent();
      barcodeDataEvent.type = d.type;
      barcodeDataEvent.data = d.value;

      this.barcodeDataSubject$.next(barcodeDataEvent);

      if (barcodeDataEvent.type === 'UPC A') {
        this.shipmentDataSubject$.next(null);
        this.binDataSubject$.next(null);
        this.skuDataSubject$.next(null);
        this.upcDataSubject$.next(barcodeDataEvent.data);
      } else if (barcodeDataEvent.type === 'Code 128') {
        if (barcodeDataEvent.data.charAt(0) === '#') {
          this.shipmentDataSubject$.next(null);
          this.skuDataSubject$.next(null);
          this.upcDataSubject$.next(null);
          this.binDataSubject$.next(barcodeDataEvent.data.substr(1));
        } else if (barcodeDataEvent.data.charAt(0) === '*') {
          this.shipmentDataSubject$.next(null);
          this.binDataSubject$.next(null);
          this.upcDataSubject$.next(null);
          this.skuDataSubject$.next(barcodeDataEvent.data.substr(1));
        } else {
          this.binDataSubject$.next(null);
          this.skuDataSubject$.next(null);
          this.upcDataSubject$.next(null);
          this.shipmentDataSubject$.next(barcodeDataEvent.data);
        }
      }
    }
    this.loopTimer = this.windowRef.setTimeout(() => {
      this.loop();
    }, 100);
  }
}

export class BarcodeDataEvent {
  public type: string;
  public data: string;
}

export class BarcodeScannerEvent {
  public name: string;
  public serial: string;
}
