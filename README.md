#Sistema de chamados#

Basicamente precisamos de um sistema que notifique as pessoas de outros andares de uma forma mais informal e com isso caso não tenha relatório de metas, mostra-se informações de clima e notícias da cidade. Utilizaremos equipamentos como **Smart TV, Notebook e celulares**. Cada dispositivo terá uma finalidade.

**SmartTV** – será responsável por apenas mostras as informações.

**Notebook** – poderá abrir a tela de informações.

**Celular** – também terá as funções no notebook, só que mais voltado para adicionar mensagens

*Todos os usuários e equipamento serão registrados para saber em qual equipamento redirecionaremos as informações.
*O dispositivo será cadastrado e receberá um código de 4 números
*O dispositivo poderá ter nome;
*Todas as informações de referência única do dispositivo ficará registrada no localStorage ou cookie, assim não precisaremos efetuar cadastros;

#Dispositivo de apresentação recursos#

Noticias
*Buscaremos noticias via RSS de diversas empresas;
*

Regras do usuário
*O usuário será registrado.
*O usuário terá acesso completo ou limitado

## Usuario Chamado ##
*são usuários registrados, podem adicionar mensagens para todos os dispositivos ou dispositivos selecionados.


## Notícias ##

mostrariamos o rss de cada empresa instalada na central.
O Apresentador mostraria uma lista de RSS de uma empresa num intervalo a ser testado, acredito que no maximo 10 segundos com imagem.

## Clima ##

O clima ficaria num cache no servidor principal buscando informações de configuração da central.
Atualização desses dados seram feitos a cada 5 minuitos ou mais.


##  Administração ##

* Registra todos os usuários;
* Identifica os equipamentos;
* Conhece todos os dispositivos online;
* Vincula informações a cada dispositivo;
* Resetar informações do cliente;

## Estrutura do projeto ##

* Backend
* Utilizaremos NodeJs;
* Base de dados será em arquivos;
* testes com mochaJs;
* socketIO para comunicação em realtime;

## FrontEnd ##
* HTML5;
* Bootstrap;
* socketIO;
* localStorage;
* Cookie;
* jQuery;

## Regras do dominio ##

### Usuario ###
* Nivel administrador;
* Nivel mensageiro;

### RSS ###
* Padronizar os RSS para o padrão do sistema sem dar problemas nos diversos equipamentos;