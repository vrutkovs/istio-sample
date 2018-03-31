from aiohttp import web

async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    data = {'message': f'Hello {name}'}
    return web.json_response(data)

app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/{name}', handle)])

web.run_app(app)
