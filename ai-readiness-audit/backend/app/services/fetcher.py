import requests


# ==================================================
# FETCH WEBSITE HTML
# ==================================================

def fetch_website(url: str):

    try:

        # ==================================================
        # REQUEST HEADERS
        # ==================================================

        headers = {

            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/122.0.0.0 Safari/537.36"
            ),

            "Accept": (
                "text/html,application/xhtml+xml,"
                "application/xml;q=0.9,image/webp,*/*;q=0.8"
            ),

            "Accept-Language": "en-US,en;q=0.9",

            "Connection": "keep-alive"
        }

        # ==================================================
        # SEND REQUEST
        # ==================================================

        response = requests.get(

            url,

            headers=headers,

            timeout=15,

            allow_redirects=True
        )

        # ==================================================
        # HANDLE BLOCKED REQUESTS
        # ==================================================

        if response.status_code != 200:

            raise Exception(
                f"Website blocked request "
                f"({response.status_code})"
            )

        # ==================================================
        # VALIDATE HTML CONTENT
        # ==================================================

        content_type = response.headers.get(
            "Content-Type",
            ""
        )

        if "text/html" not in content_type:

            raise Exception(
                "URL does not contain valid HTML content."
            )

        # ==================================================
        # RETURN WEBSITE HTML
        # ==================================================

        return response.text

    # ==================================================
    # ERROR HANDLING
    # ==================================================

    except requests.exceptions.Timeout:

        raise Exception(
            "Request timed out while fetching website."
        )

    except requests.exceptions.ConnectionError:

        raise Exception(
            "Failed to connect to the website."
        )

    except requests.exceptions.TooManyRedirects:

        raise Exception(
            "Too many redirects detected."
        )

    except requests.exceptions.RequestException as error:

        raise Exception(
            f"Request failed: {str(error)}"
        )

    except Exception as error:

        raise Exception(
            f"Unexpected error: {str(error)}"
        )