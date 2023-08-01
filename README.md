
## Sobre o repositório

Esse repositório contém o código-fonte de dois microserviços feitos com Nest.js e Kafka.

### Idéia do projeto
O microserviço `api-gateway` é responsável por receber as requisições e enviar para o tópico do Kafka e o microserviço `subscriber` é responsável por receber as mensagens do tópico do Kafka e gravar no banco de dados mongo.

## Rodar a aplicação

---

### Rodando através do docker compose up -d:

Clone o repositório na sua máquina `mono-services`:

```bash
 git clone https://github.com/wilsonllucena/mono-services.git
```

Acesse a pasta `mono-services` e abra o `VSCode`:

```bash
cd mono-services && code .
```

Rode os containers com o comando abaixo na raiz da pasta `mono-services` aguarde alguns segundos para que os containers sejam criados:

```bash
docker compose up -d
```

Para cadastrar um inscrito execute a seguinte rota no insomina ou postman:

```bash
http://localhost:3000/subscriber
```
Payload que deve ser enviado:

```bash
 {
    "name": "João",
    "email": "email@example.com",
 }
```

Para ver as mensagens que foram enviadas para o tópico `create-subscriber` execute o seguinte comando:
```bash
http://localhost:9021/clusters
```

Para ver os dados que foram gravados no banco de dados mongo via Compass e veja os dados que foram gravados no banco de dados mongo na collection `subscriber`:
```bash
mongodb://localhost:27017
```

---

