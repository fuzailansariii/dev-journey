export interface ApiResponse {
  success: boolean;
  message: string;

  // Will Remove it after adding the domain
  verificationCode?: string;
}
