# lesson-ts-express


## 各コミットについて

### 001: Respond http request by sending HTML body using EJS Template Engine
httpリクエストを受け取ると、EJSテンプレートエンジンを使用してHTMLボディを送信することにより応答します。

実行方法
```
npx ts-node src/app.ts
```

http://localhost:3000/
http://localhost:3000/page1
の２つのURLに対して、
src/viewsの下にある
index.ejs
page1.ejs
をそのままHTMLとして送信している。

