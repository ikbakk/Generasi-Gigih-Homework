# Mid Term Project (Backend Only)

# Database structure

### Videos Collection {#videos}

```
[
  {
    "id": <VideoObjectId>,
    "title": string,
    "url": string,
  }
]
```

### Products Collection

```
[
  {
    "id": <ProductObjectId>,
    "title": string
    "urlProduct": string
    "price": number
    "videoId": <VideoObjectId>
  }
]
```

### Comments Collection

```
[
  {
    "id": <CommentObjectId>,
    "comment": string
    "videoId": <VideoObjectId>
    "username": string
    "timestamp": datetime(iso 8601)
  }
]
```

# API Structure

# API Responses and Requests

## Comments

- Comment object

```
{
 id: <CommentObjectId>,
 comment: string,
 videoId: string,
 username: string,
 timestamp: datetime(iso 8601)
}
```

#### Get /api/comments

Returns all comments for particular video

- **URL Params**
  None
- **Body**

```
{
  videoId: string
}
```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ <comment object> }]`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Video ID is required"`

#### Post /api/comments

Adds a new comment to a video

- **URL Params**
  None
- **Body**

```
{
  videoId: string,
  comment: string,
  username: string
}
```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ status: 'Success'}`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ status: "Failed" }`

## Products

- Product object

```
{
 id: <ProductObjectId>,
 title: string,
 urlProduct: string,
 price: number,
 videoId: <VideoObjectId>
}
```

#### Get /api/products

Returns all products for particular video

- **URL Params**
  None
- **Body**

```
{
  videoId: string
}
```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ <product object> }]`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Video ID is required"`

#### Get /api/products/search

Returns products that contain query parameter in their title

- **URL Params**
  ```
  {
    title: string
  }
  ```
- **Body**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ <product object> }]`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Title is required"`

#### Post /api/products

Adds a new product to a video

- **URL Params**
  None
- **Body**

```
{
  videoId: string,
  title: string,
  urlProduct: string,
  price: number
}
```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <product object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Video ID is required"`

## Videos

- Video object

```
{
 id: <VideoObjectId>,
 title: string,
 url: string
}
```

#### Get /api/videos

Returns all videos

- **URL Params**
  None
- **Body**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ <video object> }]`
- **Error Response:**
  - **Code:** 500
  - **Content:** `"Something went wrong"`

#### Get /api/videos/search

Returns videos that contain query parameter in their title

- **URL Params**
  ```
  {
    title: string
  }
  ```
- **Body**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ <video object> }]`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Title is required"`

#### Post /api/videos

Adds a new video to a video

- **URL Params**
  None
- **Body**

```
{
  title: string,
  url: string
}
```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <video object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `"Title and URL are required"`

# Getting Started

Clone the repo:

```bash
git clone https://github.com/FullStack-Homework/Midterm.git
```

then run:

```bash
npm install
```

or with pnpm:

```bash
pnpm install
```

Run the development server:

```bash
npm run dev
```

or

```bash
pnpm run dev
```

Then the server will run on port 3000 as default
