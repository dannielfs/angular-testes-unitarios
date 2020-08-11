/**
 * Arquivo de teste do componente ClienteService.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

describe('ClienteService', () => {

  let clienteService: ClienteService;
  let cliente: Cliente;
  let cliente2: Cliente;

  beforeEach(() => {
    clienteService = new ClienteService();

    cliente =  new Cliente(1234567890123, 'Danniel Sousa');
    cliente2 = new Cliente(9876543210987, 'Sousa Daniel');
  
    delete sessionStorage['clientes'];
  });

  it ('it should be created a new client', () => {
    clienteService.cadastrar(cliente);
    const clienteCad = clienteService.buscarPorId(cliente.id);
    expect(clienteCad).toBeDefined();
    expect(clienteCad.id).toEqual(cliente.id);
    expect(clienteCad.nome).toEqual(cliente.nome);
  });
  
  it ('should be list all clients', () => {
    clienteService.cadastrar(cliente);
    clienteService.cadastrar(cliente2);
    const allClients: Cliente[] = clienteService.listarTodos();
    expect(allClients.length).toEqual(2);
    expect(allClients[0].id).toEqual(cliente.id);
    expect(allClients[1].id).toEqual(cliente2.id);
  })
});
