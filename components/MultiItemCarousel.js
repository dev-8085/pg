"use client";
import { useEffect } from "react";
import $ from "jquery";
const MultiItemCarousel = () => {
	useEffect(() => {
		$("#recipeCarousel").carousel({
			interval: 10000,
		});

		$(".carousel .carousel-item").each(function () {
			var minPerSlide = 3;
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(":first");
			}
			next.children(":first-child").clone().appendTo($(this));

			for (var i = 0; i < minPerSlide; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(":first");
				}
				next.children(":first-child").clone().appendTo($(this));
			}
		});
	}, []);

	return (
		<div className="container text-center my-3">
			<h2 className="font-light">Bootstrap 4 - Multi Item Carousel</h2>
			<div className="flex mx-auto my-auto">
				<div
					id="recipeCarousel"
					className="carousel slide w-full"
					data-ride="carousel"
				>
					<div className="carousel-inner w-full" role="listbox">
						<div className="carousel-item active">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=1"
									/>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=2"
									/>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=3"
									/>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=4"
									/>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=5"
									/>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="col-md-4">
								<div className="card card-body">
									<img
										className="img-fluid"
										src="http://placehold.it/380?text=6"
									/>
								</div>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev w-auto"
						href="#recipeCarousel"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon bg-dark border border-dark rounded-full"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next w-auto"
						href="#recipeCarousel"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon bg-dark border border-dark rounded-full"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
			<h5 className="mt-2">Advances one slide at a time</h5>
		</div>
	);
};

export default MultiItemCarousel;
