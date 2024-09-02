interface VerificationEmailProp {
  name: string;
  verificationCode: string;
}

export default function VerificationEmail({
  name,
  verificationCode,
}: VerificationEmailProp) {
  // console.log("Rendering verification email,", { name, verificationCode });

  const verificationLink = `${process.env.BASE_URL}/verify-email?token=${verificationCode}`;
  // console.log(verificationCode);

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Verify Your Email</h1>
        </div>
        <div className="p-4">
          <p className="text-gray-700 mb-2">Hi {name},</p>
          <p className="text-gray-700 mb-4">
            Thank you for signing up for <strong>{"< DevJourney />"}</strong> !{" "}
            <br />
            Please verify your account by filling this code:
          </p>
          <div className="text-center mb-4">
            <h1>{verificationCode}</h1>
          </div>
          {/* <div className="flex flex-col">
              <p className="text-gray-700 mb-4">
                If the link doesn't work, copy and paste this url to your browser.
              </p>
              <p>{verificationLink}</p>
            </div> */}
          <p className="text-gray-700 mb-4">
            If you did not request this verification, please ignore this email.
          </p>
        </div>
        <div className="bg-gray-50 text-gray-600 text-center py-2">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-500">{"< DevJourney />"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
