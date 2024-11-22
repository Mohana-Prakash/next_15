"use client";
import React, { useEffect } from "react";

const SwaggerRedirect = () => {
    useEffect(() => {
        window.location.href =
            "https://getenergy-stage-consumer.ggexcel.ai/swagger-ui/index.html#/";
    }, []);

    return null;
};

export default SwaggerRedirect;
