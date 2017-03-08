# Sistema de chamados#

O sistema será capaz de notificar usuários em TV, Notebook, Celular ou qualquer dispositivo que utilize navegadores (chrome,firefox,safari).

O sistema é divido em 3 setores (Apresentação, Adm, Usuario Chamado).


Usuario Chamado – são usuários registrados, podem adicionar mensagens para todos os dispositivos ou dispositivos selecionados.

Apresentação – Temos diversas configurações;
padrão – onde podemos apresentar noticias dos maiores portais, o clima do dia, e lista de ultimos chamados, que ficam registrado no dispositivo;
somente relatório – onde apresentamos relatórios da empesa e mostrariamos as informações dos chamados

Notícias 
mostrariamos o rss de cada empresa instalada na central.
O Apresentador mostraria uma lista de RSS de uma empresa num intervalo a ser testado, acredito que no maximo 10 segundos com imagem.

Clima

O clima ficaria num cache no servidor principal buscando informações de configuração da central.
Atualização desses dados seram feitos a cada 5 minuitos ou mais.


 Administração

Registra todos os usuários;
Identifica os equipamentos;
Conhece todos os dispositivos online;
Vincula informações a cada dispositivo;
Resetar informações do cliente;

Estrutura do projeto

Backend
Utilizaremos NodeJs;
Base de dados será em arquivos;
testes com mochaJs;
socketIO para comunicação em realtime;

FrontEnd
HTML5;
Bootstrap;
socketIO;
localStorage;
Cookie;
jQuery;

Regras do dominio;

Usuario
Nivel administrador;
Nivel mensageiro;
RSS
	Padronizar os RSS para o padrão do sistema sem dar problemas nos diversos equipamentos;