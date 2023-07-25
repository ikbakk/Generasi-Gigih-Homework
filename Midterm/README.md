# Mid Term Project (Backend Only)

# Database structure

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

# API Structure

# API Responses and Requests

## Comments

- Comment object
  ```
  {
    id: string,
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
- **Data Params**

  - **Body:**
    ```
    {
      videoId: string
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    [
      {
        "status": "Success",
        "data": [{<comment object>}]
      }
    ]
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video ID is required"
    }
    ```
    or
  - **Code:** 404
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video not found"
    }
    ```

#### Post /api/comments

Adds a new comment to a video

- **URL Params**
  None
- **Data Params**

  - **Body:**
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
  - **Content:**

    ```
    {
      status: "Failed" ,
      message: "Comment validation failed: username: Path `username` is required., comment: Path `comment` is required., videoId: Path `videoId` is required."
    }

    ```

## Products

- Product object
  ```
  {
    id: string,
    title: string,
    urlProduct: string,
    price: number,
    videoId: string
  }
  ```

#### Get /api/products

Returns all products for particular video

- **URL Params**
  None
- **Data Params**

  - **Body:**
    ```
    {
      videoId: string
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    [
      {
        "status": "Success",
        "data": [{<product object>}]
      }
    ]
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video ID is required"
    }
    ```
    or
  - **Code:** 404
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video not found"
    }
    ```

#### Get /api/products/search

Returns products that contain query parameter in their title

- **URL Params**
  - **Query Params:**
    ```
    {
      title: string
    }
    ```
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
      {
        "status": "Success",
        "data": [{<product object>}]
      }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Title is required"
    }
    ```

#### Post /api/products

Adds a new product to a video

- **URL Params**
  None
- **Data Params**

  - **Body:**
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
  - **Code:** 201
  - **Content:**
    ```
    {
      "status": "Success",
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Product validation failed: title: Path `title` is required., price: Path `price` is required., urlProduct: Path `urlProduct` is required."
    }
    ```

## Videos

- Video object

  ```
  {
  id: string,
  title: string,
  url: string
  }
  ```

#### Get /api/videos

Returns all videos

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    {
      "status": "Success",
      "data": [{<video object>}]
    }
    ```
- **Error Response:**
  - **Code:** 500
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Something went wrong"
    }
    ```

#### Get /api/videos/search

Returns videos that contain query parameter in their title

- **URL Params**
  - **Query Params:**
    ```
    {
      title: string
    }
    ```
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    {
      "status": "Success",
      "data": [{<video object>}]
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Title is required"
    }
    ```
    or
  - **Code:** 500
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Something went wrong"
    }
    ```

#### Post /api/videos

Adds a new video to a video

- **URL Params**
  None
- **Data Params**

  - **Body:**
    ```
    {
      title: string,
      url: string
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```
    {
      "status": "Success",
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video validation failed: title: Path `title` is required., url: Path `url` is required."
    }
    ```

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
