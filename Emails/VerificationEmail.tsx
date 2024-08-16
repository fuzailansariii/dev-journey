interface VerificationEmailProps {
  username: string;
  verifyCode: string;
}
const VerificationEmail: React.FC<VerificationEmailProps> = ({
  username,
  verifyCode,
}) => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Verification Code</h1>
        </div>
        <div className="p-4">
          <p className="text-gray-700 mb-2">Hi {username},</p>
          <p className="text-gray-700 mb-4">
            Here is your verification code for{" "}
            <strong>{"< DevJourney />"}</strong>:{" "}
            <span className="font-semibold">{verifyCode}</span>
          </p>
          <p className="text-gray-700 mb-4">
            If you did not request this code, please ignore this email.
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
};
export default VerificationEmail;
