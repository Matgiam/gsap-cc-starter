import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const GsapTo = () => {
	// TODO: Implement the gsap.to() method
	useGSAP(() => {
		gsap.to("#blue-box", { x: 250, repeat: -1, yoyo:true, rotation: 360, duration: 2, ease: "power1.in" });
	});
  
  // useGsap hook to implement gsap.to() method
  // first parameter in gsap.to is the id element we want to animate
  // second parameter is the parameter we want to animate (x:250 moves from 0 to position 250 for example)
  //repeat -1 makes the animation infinite
  // yoyo:true makes the animation go back to the original position
	return (
		<main>
			<h1>GsapTo</h1>

			<p className="mt-5 text-gray-500">
				The <code>gsap.to()</code> method is used to animate elements from their current state to a new state.
			</p>
			<p className="mt-5 text-gray-500">
				The <code>gsap.to()</code> method is similar to the <code>gsap.from()</code> method, but the difference is that the <code>gsap.to()</code>{" "}
				method animates elements from their current state to a new state, while the <code>gsap.from()</code> method animates elements from a new state
				to their current state.
			</p>

			<p className="mt-5 text-gray-500">
				Read more about the{" "}
				<a href="https://greensock.com/docs/v3/GSAP/gsap.to()" target="_blank" rel="noreferrer noopener nofollow">
					gsap.to()
				</a>{" "}
				method.
			</p>

			<div className="mt-20">
				<div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
			</div>
		</main>
	);
};

export default GsapTo;
