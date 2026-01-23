import {defineStore} from "pinia";

export type Step = "email" | "otp" | "new-password";

export const usePasswordResetStore = defineStore("passwordReset", {
	state: () => ({
		currentStep: "new-password" as Step,
		email: "test@gmail.com",
		otp: "",
		otpVerified: false,
		otpExpiresAt: null as Date | null
	}),
	getters: {
		isOtpExpired(): boolean {
			if (!this.otpExpiresAt) return true;
			return new Date() > this.otpExpiresAt;
		}
	},
	actions: {
		// async sendOtp(email: string) {
		// 	this.isLoading = true;
		// 	this.error = null;
		// 	try {
		// 		await $fetch("/api/auth/send-otp", {
		// 			method: "POST",
		// 			body: { email }
		// 		});
		// 		this.email = email;
		// 		this.currentStep = "otp";
		// 	} catch (e) {
		// 		this.error = "Failed to send OTP";
		// 	} finally {
		// 		this.isLoading = false;
		// 	}
		// },
		//
		// async verifyOtp(otp: string) {
		// 	this.isLoading = true;
		// 	this.error = null;
		// 	try {
		// 		// Backend verifies OTP and returns a short-lived token
		// 		const { token } = await $fetch("/api/auth/verify-otp", {
		// 			method: "POST",
		// 			body: { email: this.email, otp }
		// 		});
		// 		this.resetToken = token;
		// 		this.currentStep = "new-password";
		// 	} catch (e) {
		// 		this.error = "Invalid or expired OTP";
		// 	} finally {
		// 		this.isLoading = false;
		// 	}
		// },
		//
		// async resetPassword(newPassword: string) {
		// 	this.isLoading = true;
		// 	this.error = null;
		// 	try {
		// 		// Token proves OTP was verified — backend checks it again
		// 		await $fetch("/api/auth/reset-password", {
		// 			method: "POST",
		// 			body: { token: this.resetToken, password: newPassword }
		// 		});
		// 		this.currentStep = "success";
		// 	} catch (e) {
		// 		this.error = "Failed to reset password";
		// 	} finally {
		// 		this.isLoading = false;
		// 	}
		// },
		setEmail(email: string) {
			this.email = email;
		},
		startOtpStep() {
			this.currentStep = "otp";
			// OTP expires in 5 minutes
			this.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
		},
		verifyOtp(otp: string) {
			this.otp = otp;
			this.otpVerified = true;
			this.currentStep = "new-password";
		},
		$reset() {
			this.currentStep = "new-password";
			this.email = "";
			this.otp = "";
			this.otpVerified = false;
			this.otpExpiresAt = null;
		}
	}
});
