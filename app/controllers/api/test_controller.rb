module Api
    class TestController < ApplicationController
        def hello_world
            session[:count] = (session[:count] || 0) + 1
            render json: { count: session[:count] }
        end
    end
end
