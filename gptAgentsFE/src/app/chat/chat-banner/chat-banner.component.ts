import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SmChatListComponent } from '../sm-chat-list/sm-chat-list.component';

@Component({
  selector: 'app-chat-banner',
  templateUrl: './chat-banner.component.html',
  styleUrls: ['./chat-banner.component.css'],
})
export class ChatBannerComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  getChatList() {
    this.createDynamicComponent();
  }
  createDynamicComponent() {
    // Get the component factory for the DynamicComponent
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        SmChatListComponent
      );

    // Create an instance of the component
    const componentRef = componentFactory.create(this.container.injector);

    // Attach the component to the container
    this.container.insert(componentRef.hostView);
  }
}
