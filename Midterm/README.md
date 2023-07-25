# Mid Term Project (Backend Only)

# Database structure

### Videos Collection {#videos}

```json
[
  {
    "id": "videosid", //id of the video
    "title": "video's title", //title of the video
    "url": "http://thumbnail-image.placeholder.com/600x400" //url for the thumbnail
  }
]
```

### Products Collection

```json
[
  {
    "id": "productid", //id of the product
    "title": "product's title", //title of the product
    "urlProduct": "https://youtube.com" //video url of the product
    "price": 100, //price of the product
    "videoId": "videosid", //id of video collection this comment belongs to
  }
]
```

### Comments Collection

```json
[
  {
    "id": "commentid", //id of the comment
    "comment": "comment's text", //comment
    "videoId": "videosid", //id of video collection this comment belongs to
    "username": "username", //username of the comment's author
    "timestamp": "2023-07-23T03:10:55.733+00:00" //timestamp of the comment in ISO 8601 format
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
- **Data Params**

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

#### Get /api/products/search?title=title

Returns products that contain query parameter in their title

- **URL Params**
  None
- **Data Params**

```
{
  title: string
}
```

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
- **Data Params**

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
  - **Content:** `[{ <video object> }]`
- **Error Response:**
  - **Code:** 500
  - **Content:** `"Something went wrong"`

#### Get /api/videos/search?title=title

Returns videos that contain query parameter in their title

- **URL Params**
  None
- **Data Params**

```
{
  title: string
}
```

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
- **Data Params**

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
