// import axios from "axios";
// import { useRouter } from "expo-router";
// import { useCallback, useState } from "react";

// export default function useLoginController() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = useCallback(async () => {
//     setError("");
//     setLoading(true);

//     if (!email || !password) {
//       setError("Email and password are required.");
//       setLoading(false);
//       return;
//     }

//     console.log("test if working");
//     try {
//       const res = await axios.post("https://reqres.in/api/login", {
//         email,
//         password,
//       });
//       console.log("TOKEN:", res.data.token);
//       router.navigate("./tabs");
//     } catch (err: any) {
//       setError(err.response?.data?.error || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }, [email, password, router]);

//   return {
//     email,
//     password,
//     setEmail,
//     setPassword,
//     handleLogin,
//     loading,
//     error,
//   };
// }
