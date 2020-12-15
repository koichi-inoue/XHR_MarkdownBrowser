// インスタンスを作成
var xhr = new XMLHttpRequest();
// 非同期リクエスト async true
xhr.open('GET', 'test.md', true);
// サーバへリクエストを送信 （ null ）
xhr.send();

xhr.onload = function(){
  if((xhr.readyState == 4) && (xhr.status == 200)) {
    document.querySelector('#content').innerHTML = marked(xhr.responseText);
  }
}

xhr.onerror = function() {
  alert("Request failed");
};

// 参考　//////////////////////////

// open(method,url,async,uname,pswd) ////
// リクエストします. リクエストが非同期の場合は URL やその他のオプションである性質を指定します.
// method: リクエストタイプで GET か POST.
// url: サーバ上のファイルの場所.
// async: true (非同期) or false (同期)

// send(string) ////
// サーバへリクエストを送信します
// 引数は POST リクエストの場合に使用します.

// readyState ////
// XMLHttpRequest の状態を持ちます.
// 0: リクエストは初期化されていません.
// 1: サーバとの接続が確立されました.
// 2: リクエストを受け付けました.
// 3: リクエストを処理しています.
// 4: リクエストが終了し、レスポンスの準備が完了しました.

// status ////
// ステータス番号を返します.
// 404: Not Found
// 200: OK
