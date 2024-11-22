"use client";
import React, { useEffect } from "react";

const SwaggerRedirect = () => {
    useEffect(() => {
        // Redirect to the Swagger UI URL
        window.location.href =
            "https://getenergy-stage-consumer.ggexcel.ai/swagger-ui/index.html#/";
    }, []);

    return null; // Nothing is rendered since the user is being redirected
};

export default SwaggerRedirect;
