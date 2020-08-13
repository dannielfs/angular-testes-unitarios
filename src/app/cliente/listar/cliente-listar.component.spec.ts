/**
 * Arquivo de teste do componente ClienteListarComponent.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ClienteListarComponent } from './';
import { 
	ClienteService,
	Cliente,
	ClienteIdPipe
} from '../';
import { 
	ModalUtilComponent, 
	KzPaginacaoComponent,
	RouterLinkStubDirective,
	ActivatedRouteStub
} from '../../';
import { DebugElement } from '@angular/core';

describe('ClienteListar', () => {

  let fixture: ComponentFixture<ClienteListarComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let clienteService: ClienteService;
  let clientes: Cliente[] = [
	  new Cliente(1234567890123, 'Fulano'),
	  new Cliente(9876543210987, 'Beltrano')
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	declarations: [ 
    		ClienteListarComponent,
    		ModalUtilComponent,
    		KzPaginacaoComponent,
			RouterLinkStubDirective,
			ClienteIdPipe
    	],
    	providers:    [
    	  ClienteService,
    	  { 
    	  	provide: ActivatedRoute, 
    	  	useValue: new ActivatedRouteStub() 
    	  }
    	]
    });

	fixture = TestBed.createComponent(ClienteListarComponent);
	
	//Mock clienteService
	clienteService = TestBed.get(ClienteService);
	spyOn(clienteService, 'totalRegistros').and.returnValue(2);
	spyOn(clienteService, 'listarParcial').and.returnValue(clientes);
  });

  it ('should be ')
  xit('deve garantir que o componente tenha sido criado', () => {
    expect(fixture).toBeDefined();
  });
  
});
