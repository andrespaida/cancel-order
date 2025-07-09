# Cancel Order Microservice

This microservice is responsible for canceling an existing order.

## Tech Stack
- JavaScript (Node.js)
- GraphQL (Apollo Server)
- MariaDB
- KISS architecture

## Endpoint
- **URL:** `POST /`  
- **GraphQL Mutation:**

```
mutation {
  cancelOrder(id: "1") {
    id
    status
    userId
  }
}
```

## Swagger Documentation

```yaml
openapi: 3.0.0
info:
  title: Cancel Order API
  version: 1.0.0
paths:
  /:
    post:
      summary: Cancel an order by ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
      responses:
        '200':
          description: Order canceled successfully
```