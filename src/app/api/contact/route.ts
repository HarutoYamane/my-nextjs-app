import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // サーバサイドでのバリデーション
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { ok: false, message: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    // ここで実際のメール送信処理を実装 (SendGrid などの外部サービスを使用)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 開発用のログ出力
    console.log("お問い合わせを受け付けました。");
    console.log(data);

    return NextResponse.json(
      { ok: true, message: "お問い合わせを受け付けました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("お問い合わせエラー:", error);

    return NextResponse.json(
      { ok: false, message: "エラーが発生しました。もう一度お試しください。" },
      { status: 500 }
    );
  }
}
