

Problema de conexão com o localhost do WSL resolvido com isso :

* Funciona normalmente quando o projeto node é feito pelo cmd

https://github.com/Huachao/vscode-restclient/issues/523#issuecomment-991895111

"De alguma forma eu consertei.@kimcatsbestá completamente certo. O problema será corrigido para usuários do WSL2 se esta extensão parar de se transformar localhostem 127.0.0.1. Quando o localhost se transformar em 127.0.0.1, ele apontará para o sistema operacional Windows real, ou seja, o host do WSL2 e não o próprio WSL2 vm.

Existem várias soluções para isso. O mais rápido é executar `ip a | grep inet` no WSL2 e usar seu endereço IP real. Assim, seus pedidos se tornarão algo assim:

GET http://172.18.228.135:3000/api/foo
No entanto, esta solução não é boa, pois o endereço IP do WSL2 não é estático (ele mudará). Outra solução seria usar o cmd do Windows, que é um pesadelo para muitas pessoas unixy. Então eu também pergunto@Huachaopara corrigir esse problema para usuários do WSL2. Obrigado."

