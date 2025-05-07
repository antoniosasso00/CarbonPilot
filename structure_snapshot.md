# 🗂️ Snapshot struttura progetto

- 📍 Root: `C:\Users\Anton\Desktop\CarbonPilot`
- 📆 Generato il: `2025-05-07 21:05:30`
- 🧩 Backend version: `0.1.0`
- 🧩 Frontend version: `0.1.0`

## 🔁 Routers FastAPI registrati
- `/parts`
- `/catalog`
- `/autoclaves`
- `/nesting`
- `/schedules`

## 📦 Script disponibili (`frontend/package.json`)
- `dev`
- `build`
- `start`
- `lint`

## 📂 Struttura progetto
```
├── .env
├── .gitignore
├── Lib
│   └── site-packages
│       ├── pip
│       │   ├── __init__.py
│       │   ├── __main__.py
│       │   ├── __pip-runner__.py
│       │   ├── _internal
│       │   │   ├── __init__.py
│       │   │   ├── build_env.py
│       │   │   ├── cache.py
│       │   │   ├── cli
│       │   │   │   ├── __init__.py
│       │   │   │   ├── autocompletion.py
│       │   │   │   ├── base_command.py
│       │   │   │   ├── cmdoptions.py
│       │   │   │   ├── command_context.py
│       │   │   │   ├── index_command.py
│       │   │   │   ├── main.py
│       │   │   │   ├── main_parser.py
│       │   │   │   ├── parser.py
│       │   │   │   ├── progress_bars.py
│       │   │   │   ├── req_command.py
│       │   │   │   ├── spinners.py
│       │   │   │   └── status_codes.py
│       │   │   ├── commands
│       │   │   │   ├── __init__.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── check.py
│       │   │   │   ├── completion.py
│       │   │   │   ├── configuration.py
│       │   │   │   ├── debug.py
│       │   │   │   ├── download.py
│       │   │   │   ├── freeze.py
│       │   │   │   ├── hash.py
│       │   │   │   ├── help.py
│       │   │   │   ├── index.py
│       │   │   │   ├── inspect.py
│       │   │   │   ├── install.py
│       │   │   │   ├── list.py
│       │   │   │   ├── lock.py
│       │   │   │   ├── search.py
│       │   │   │   ├── show.py
│       │   │   │   ├── uninstall.py
│       │   │   │   └── wheel.py
│       │   │   ├── configuration.py
│       │   │   ├── distributions
│       │   │   │   ├── __init__.py
│       │   │   │   ├── base.py
│       │   │   │   ├── installed.py
│       │   │   │   ├── sdist.py
│       │   │   │   └── wheel.py
│       │   │   ├── exceptions.py
│       │   │   ├── index
│       │   │   │   ├── __init__.py
│       │   │   │   ├── collector.py
│       │   │   │   ├── package_finder.py
│       │   │   │   └── sources.py
│       │   │   ├── locations
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _distutils.py
│       │   │   │   ├── _sysconfig.py
│       │   │   │   └── base.py
│       │   │   ├── main.py
│       │   │   ├── metadata
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _json.py
│       │   │   │   ├── base.py
│       │   │   │   ├── importlib
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _compat.py
│       │   │   │   │   ├── _dists.py
│       │   │   │   │   └── _envs.py
│       │   │   │   └── pkg_resources.py
│       │   │   ├── models
│       │   │   │   ├── __init__.py
│       │   │   │   ├── candidate.py
│       │   │   │   ├── direct_url.py
│       │   │   │   ├── format_control.py
│       │   │   │   ├── index.py
│       │   │   │   ├── installation_report.py
│       │   │   │   ├── link.py
│       │   │   │   ├── pylock.py
│       │   │   │   ├── scheme.py
│       │   │   │   ├── search_scope.py
│       │   │   │   ├── selection_prefs.py
│       │   │   │   ├── target_python.py
│       │   │   │   └── wheel.py
│       │   │   ├── network
│       │   │   │   ├── __init__.py
│       │   │   │   ├── auth.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── download.py
│       │   │   │   ├── lazy_wheel.py
│       │   │   │   ├── session.py
│       │   │   │   ├── utils.py
│       │   │   │   └── xmlrpc.py
│       │   │   ├── operations
│       │   │   │   ├── __init__.py
│       │   │   │   ├── build
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── build_tracker.py
│       │   │   │   │   ├── metadata.py
│       │   │   │   │   ├── metadata_editable.py
│       │   │   │   │   ├── metadata_legacy.py
│       │   │   │   │   ├── wheel.py
│       │   │   │   │   ├── wheel_editable.py
│       │   │   │   │   └── wheel_legacy.py
│       │   │   │   ├── check.py
│       │   │   │   ├── freeze.py
│       │   │   │   ├── install
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── editable_legacy.py
│       │   │   │   │   └── wheel.py
│       │   │   │   └── prepare.py
│       │   │   ├── pyproject.py
│       │   │   ├── req
│       │   │   │   ├── __init__.py
│       │   │   │   ├── constructors.py
│       │   │   │   ├── req_dependency_group.py
│       │   │   │   ├── req_file.py
│       │   │   │   ├── req_install.py
│       │   │   │   ├── req_set.py
│       │   │   │   └── req_uninstall.py
│       │   │   ├── resolution
│       │   │   │   ├── __init__.py
│       │   │   │   ├── base.py
│       │   │   │   ├── legacy
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── resolver.py
│       │   │   │   └── resolvelib
│       │   │   │       ├── __init__.py
│       │   │   │       ├── base.py
│       │   │   │       ├── candidates.py
│       │   │   │       ├── factory.py
│       │   │   │       ├── found_candidates.py
│       │   │   │       ├── provider.py
│       │   │   │       ├── reporter.py
│       │   │   │       ├── requirements.py
│       │   │   │       └── resolver.py
│       │   │   ├── self_outdated_check.py
│       │   │   ├── utils
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _jaraco_text.py
│       │   │   │   ├── _log.py
│       │   │   │   ├── appdirs.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── compatibility_tags.py
│       │   │   │   ├── datetime.py
│       │   │   │   ├── deprecation.py
│       │   │   │   ├── direct_url_helpers.py
│       │   │   │   ├── egg_link.py
│       │   │   │   ├── entrypoints.py
│       │   │   │   ├── filesystem.py
│       │   │   │   ├── filetypes.py
│       │   │   │   ├── glibc.py
│       │   │   │   ├── hashes.py
│       │   │   │   ├── logging.py
│       │   │   │   ├── misc.py
│       │   │   │   ├── packaging.py
│       │   │   │   ├── retry.py
│       │   │   │   ├── setuptools_build.py
│       │   │   │   ├── subprocess.py
│       │   │   │   ├── temp_dir.py
│       │   │   │   ├── unpacking.py
│       │   │   │   ├── urls.py
│       │   │   │   ├── virtualenv.py
│       │   │   │   └── wheel.py
│       │   │   ├── vcs
│       │   │   │   ├── __init__.py
│       │   │   │   ├── bazaar.py
│       │   │   │   ├── git.py
│       │   │   │   ├── mercurial.py
│       │   │   │   ├── subversion.py
│       │   │   │   └── versioncontrol.py
│       │   │   └── wheel_builder.py
│       │   ├── _vendor
│       │   │   ├── __init__.py
│       │   │   ├── cachecontrol
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _cmd.py
│       │   │   │   ├── adapter.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── caches
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── file_cache.py
│       │   │   │   │   └── redis_cache.py
│       │   │   │   ├── controller.py
│       │   │   │   ├── filewrapper.py
│       │   │   │   ├── heuristics.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── serialize.py
│       │   │   │   └── wrapper.py
│       │   │   ├── certifi
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── cacert.pem
│       │   │   │   ├── core.py
│       │   │   │   └── py.typed
│       │   │   ├── dependency_groups
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── _implementation.py
│       │   │   │   ├── _lint_dependency_groups.py
│       │   │   │   ├── _pip_wrapper.py
│       │   │   │   ├── _toml_compat.py
│       │   │   │   └── py.typed
│       │   │   ├── distlib
│       │   │   │   ├── __init__.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── database.py
│       │   │   │   ├── index.py
│       │   │   │   ├── locators.py
│       │   │   │   ├── manifest.py
│       │   │   │   ├── markers.py
│       │   │   │   ├── metadata.py
│       │   │   │   ├── resources.py
│       │   │   │   ├── scripts.py
│       │   │   │   ├── t32.exe
│       │   │   │   ├── t64-arm.exe
│       │   │   │   ├── t64.exe
│       │   │   │   ├── util.py
│       │   │   │   ├── version.py
│       │   │   │   ├── w32.exe
│       │   │   │   ├── w64-arm.exe
│       │   │   │   ├── w64.exe
│       │   │   │   └── wheel.py
│       │   │   ├── distro
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── distro.py
│       │   │   │   └── py.typed
│       │   │   ├── idna
│       │   │   │   ├── __init__.py
│       │   │   │   ├── codec.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── core.py
│       │   │   │   ├── idnadata.py
│       │   │   │   ├── intranges.py
│       │   │   │   ├── package_data.py
│       │   │   │   ├── py.typed
│       │   │   │   └── uts46data.py
│       │   │   ├── msgpack
│       │   │   │   ├── __init__.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── ext.py
│       │   │   │   └── fallback.py
│       │   │   ├── packaging
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _elffile.py
│       │   │   │   ├── _manylinux.py
│       │   │   │   ├── _musllinux.py
│       │   │   │   ├── _parser.py
│       │   │   │   ├── _structures.py
│       │   │   │   ├── _tokenizer.py
│       │   │   │   ├── licenses
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _spdx.py
│       │   │   │   ├── markers.py
│       │   │   │   ├── metadata.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── requirements.py
│       │   │   │   ├── specifiers.py
│       │   │   │   ├── tags.py
│       │   │   │   ├── utils.py
│       │   │   │   └── version.py
│       │   │   ├── pkg_resources
│       │   │   │   └── __init__.py
│       │   │   ├── platformdirs
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── android.py
│       │   │   │   ├── api.py
│       │   │   │   ├── macos.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── unix.py
│       │   │   │   ├── version.py
│       │   │   │   └── windows.py
│       │   │   ├── pygments
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── console.py
│       │   │   │   ├── filter.py
│       │   │   │   ├── filters
│       │   │   │   │   └── __init__.py
│       │   │   │   ├── formatter.py
│       │   │   │   ├── formatters
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _mapping.py
│       │   │   │   ├── lexer.py
│       │   │   │   ├── lexers
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _mapping.py
│       │   │   │   │   └── python.py
│       │   │   │   ├── modeline.py
│       │   │   │   ├── plugin.py
│       │   │   │   ├── regexopt.py
│       │   │   │   ├── scanner.py
│       │   │   │   ├── sphinxext.py
│       │   │   │   ├── style.py
│       │   │   │   ├── styles
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _mapping.py
│       │   │   │   ├── token.py
│       │   │   │   ├── unistring.py
│       │   │   │   └── util.py
│       │   │   ├── pyproject_hooks
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _impl.py
│       │   │   │   ├── _in_process
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _in_process.py
│       │   │   │   └── py.typed
│       │   │   ├── requests
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __version__.py
│       │   │   │   ├── _internal_utils.py
│       │   │   │   ├── adapters.py
│       │   │   │   ├── api.py
│       │   │   │   ├── auth.py
│       │   │   │   ├── certs.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── cookies.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── help.py
│       │   │   │   ├── hooks.py
│       │   │   │   ├── models.py
│       │   │   │   ├── packages.py
│       │   │   │   ├── sessions.py
│       │   │   │   ├── status_codes.py
│       │   │   │   ├── structures.py
│       │   │   │   └── utils.py
│       │   │   ├── resolvelib
│       │   │   │   ├── __init__.py
│       │   │   │   ├── providers.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── reporters.py
│       │   │   │   ├── resolvers
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── abstract.py
│       │   │   │   │   ├── criterion.py
│       │   │   │   │   ├── exceptions.py
│       │   │   │   │   └── resolution.py
│       │   │   │   └── structs.py
│       │   │   ├── rich
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── _cell_widths.py
│       │   │   │   ├── _emoji_codes.py
│       │   │   │   ├── _emoji_replace.py
│       │   │   │   ├── _export_format.py
│       │   │   │   ├── _extension.py
│       │   │   │   ├── _fileno.py
│       │   │   │   ├── _inspect.py
│       │   │   │   ├── _log_render.py
│       │   │   │   ├── _loop.py
│       │   │   │   ├── _null_file.py
│       │   │   │   ├── _palettes.py
│       │   │   │   ├── _pick.py
│       │   │   │   ├── _ratio.py
│       │   │   │   ├── _spinners.py
│       │   │   │   ├── _stack.py
│       │   │   │   ├── _timer.py
│       │   │   │   ├── _win32_console.py
│       │   │   │   ├── _windows.py
│       │   │   │   ├── _windows_renderer.py
│       │   │   │   ├── _wrap.py
│       │   │   │   ├── abc.py
│       │   │   │   ├── align.py
│       │   │   │   ├── ansi.py
│       │   │   │   ├── bar.py
│       │   │   │   ├── box.py
│       │   │   │   ├── cells.py
│       │   │   │   ├── color.py
│       │   │   │   ├── color_triplet.py
│       │   │   │   ├── columns.py
│       │   │   │   ├── console.py
│       │   │   │   ├── constrain.py
│       │   │   │   ├── containers.py
│       │   │   │   ├── control.py
│       │   │   │   ├── default_styles.py
│       │   │   │   ├── diagnose.py
│       │   │   │   ├── emoji.py
│       │   │   │   ├── errors.py
│       │   │   │   ├── file_proxy.py
│       │   │   │   ├── filesize.py
│       │   │   │   ├── highlighter.py
│       │   │   │   ├── json.py
│       │   │   │   ├── jupyter.py
│       │   │   │   ├── layout.py
│       │   │   │   ├── live.py
│       │   │   │   ├── live_render.py
│       │   │   │   ├── logging.py
│       │   │   │   ├── markup.py
│       │   │   │   ├── measure.py
│       │   │   │   ├── padding.py
│       │   │   │   ├── pager.py
│       │   │   │   ├── palette.py
│       │   │   │   ├── panel.py
│       │   │   │   ├── pretty.py
│       │   │   │   ├── progress.py
│       │   │   │   ├── progress_bar.py
│       │   │   │   ├── prompt.py
│       │   │   │   ├── protocol.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── region.py
│       │   │   │   ├── repr.py
│       │   │   │   ├── rule.py
│       │   │   │   ├── scope.py
│       │   │   │   ├── screen.py
│       │   │   │   ├── segment.py
│       │   │   │   ├── spinner.py
│       │   │   │   ├── status.py
│       │   │   │   ├── style.py
│       │   │   │   ├── styled.py
│       │   │   │   ├── syntax.py
│       │   │   │   ├── table.py
│       │   │   │   ├── terminal_theme.py
│       │   │   │   ├── text.py
│       │   │   │   ├── theme.py
│       │   │   │   ├── themes.py
│       │   │   │   ├── traceback.py
│       │   │   │   └── tree.py
│       │   │   ├── tomli
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _parser.py
│       │   │   │   ├── _re.py
│       │   │   │   ├── _types.py
│       │   │   │   └── py.typed
│       │   │   ├── tomli_w
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _writer.py
│       │   │   │   └── py.typed
│       │   │   ├── truststore
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _api.py
│       │   │   │   ├── _macos.py
│       │   │   │   ├── _openssl.py
│       │   │   │   ├── _ssl_constants.py
│       │   │   │   ├── _windows.py
│       │   │   │   └── py.typed
│       │   │   ├── typing_extensions.py
│       │   │   ├── urllib3
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _collections.py
│       │   │   │   ├── _version.py
│       │   │   │   ├── connection.py
│       │   │   │   ├── connectionpool.py
│       │   │   │   ├── contrib
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _appengine_environ.py
│       │   │   │   │   ├── _securetransport
│       │   │   │   │   │   ├── __init__.py
│       │   │   │   │   │   ├── bindings.py
│       │   │   │   │   │   └── low_level.py
│       │   │   │   │   ├── appengine.py
│       │   │   │   │   ├── ntlmpool.py
│       │   │   │   │   ├── pyopenssl.py
│       │   │   │   │   ├── securetransport.py
│       │   │   │   │   └── socks.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── fields.py
│       │   │   │   ├── filepost.py
│       │   │   │   ├── packages
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── backports
│       │   │   │   │   │   ├── __init__.py
│       │   │   │   │   │   ├── makefile.py
│       │   │   │   │   │   └── weakref_finalize.py
│       │   │   │   │   └── six.py
│       │   │   │   ├── poolmanager.py
│       │   │   │   ├── request.py
│       │   │   │   ├── response.py
│       │   │   │   └── util
│       │   │   │       ├── __init__.py
│       │   │   │       ├── connection.py
│       │   │   │       ├── proxy.py
│       │   │   │       ├── queue.py
│       │   │   │       ├── request.py
│       │   │   │       ├── response.py
│       │   │   │       ├── retry.py
│       │   │   │       ├── ssl_.py
│       │   │   │       ├── ssl_match_hostname.py
│       │   │   │       ├── ssltransport.py
│       │   │   │       ├── timeout.py
│       │   │   │       ├── url.py
│       │   │   │       └── wait.py
│       │   │   └── vendor.txt
│       │   └── py.typed
│       └── pip-25.1.1.dist-info
│           ├── INSTALLER
│           ├── METADATA
│           ├── RECORD
│           ├── REQUESTED
│           ├── WHEEL
│           ├── entry_points.txt
│           ├── licenses
│           │   ├── AUTHORS.txt
│           │   └── LICENSE.txt
│           └── top_level.txt
├── README.md
├── Scripts
│   ├── pip.exe
│   ├── pip3.13.exe
│   └── pip3.exe
├── backend
│   ├── .env
│   ├── Dockerfile
│   ├── README.md
│   ├── __init__.py
│   ├── alembic
│   │   ├── README
│   │   ├── env.py
│   │   └── script.py.mako
│   ├── alembic.ini
│   ├── crud
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── parts.py
│   │   └── schedules.py
│   ├── database.py
│   ├── main.py
│   ├── models
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── part.py
│   │   └── schedule.py
│   ├── poetry.lock
│   ├── pyproject.toml
│   ├── routers
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── nesting.py
│   │   ├── parts.py
│   │   ├── reports.py
│   │   └── schedules.py
│   ├── schemas
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── part.py
│   │   └── schedule.py
│   └── services
│       ├── nesting.py
│       └── pdf_report.py
├── docker-compose.yml
├── frontend
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── app
│   │   ├── autoclaves
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── catalog
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── nesting
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── parts
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── schedules
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── nesting
│   │   │   └── NestingPreview.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── components.json
│   ├── eslint.config.mjs
│   ├── lib
│   │   └── api.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   └── types
│       ├── autoclave.ts
│       ├── catalog_part.ts
│       └── part.ts
├── requirements.txt
├── scan_structure_enhanced.py
├── structure_snapshot.md
├── tsconfig.json
└── venv
    ├── .gitignore
    ├── Include
    ├── Lib
    │   └── site-packages
    │       ├── pip
    │       │   ├── __init__.py
    │       │   ├── __main__.py
    │       │   ├── __pip-runner__.py
    │       │   ├── _internal
    │       │   │   ├── __init__.py
    │       │   │   ├── build_env.py
    │       │   │   ├── cache.py
    │       │   │   ├── cli
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── autocompletion.py
    │       │   │   │   ├── base_command.py
    │       │   │   │   ├── cmdoptions.py
    │       │   │   │   ├── command_context.py
    │       │   │   │   ├── index_command.py
    │       │   │   │   ├── main.py
    │       │   │   │   ├── main_parser.py
    │       │   │   │   ├── parser.py
    │       │   │   │   ├── progress_bars.py
    │       │   │   │   ├── req_command.py
    │       │   │   │   ├── spinners.py
    │       │   │   │   └── status_codes.py
    │       │   │   ├── commands
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── cache.py
    │       │   │   │   ├── check.py
    │       │   │   │   ├── completion.py
    │       │   │   │   ├── configuration.py
    │       │   │   │   ├── debug.py
    │       │   │   │   ├── download.py
    │       │   │   │   ├── freeze.py
    │       │   │   │   ├── hash.py
    │       │   │   │   ├── help.py
    │       │   │   │   ├── index.py
    │       │   │   │   ├── inspect.py
    │       │   │   │   ├── install.py
    │       │   │   │   ├── list.py
    │       │   │   │   ├── search.py
    │       │   │   │   ├── show.py
    │       │   │   │   ├── uninstall.py
    │       │   │   │   └── wheel.py
    │       │   │   ├── configuration.py
    │       │   │   ├── distributions
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── base.py
    │       │   │   │   ├── installed.py
    │       │   │   │   ├── sdist.py
    │       │   │   │   └── wheel.py
    │       │   │   ├── exceptions.py
    │       │   │   ├── index
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── collector.py
    │       │   │   │   ├── package_finder.py
    │       │   │   │   └── sources.py
    │       │   │   ├── locations
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _distutils.py
    │       │   │   │   ├── _sysconfig.py
    │       │   │   │   └── base.py
    │       │   │   ├── main.py
    │       │   │   ├── metadata
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _json.py
    │       │   │   │   ├── base.py
    │       │   │   │   ├── importlib
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── _compat.py
    │       │   │   │   │   ├── _dists.py
    │       │   │   │   │   └── _envs.py
    │       │   │   │   └── pkg_resources.py
    │       │   │   ├── models
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── candidate.py
    │       │   │   │   ├── direct_url.py
    │       │   │   │   ├── format_control.py
    │       │   │   │   ├── index.py
    │       │   │   │   ├── installation_report.py
    │       │   │   │   ├── link.py
    │       │   │   │   ├── scheme.py
    │       │   │   │   ├── search_scope.py
    │       │   │   │   ├── selection_prefs.py
    │       │   │   │   ├── target_python.py
    │       │   │   │   └── wheel.py
    │       │   │   ├── network
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── auth.py
    │       │   │   │   ├── cache.py
    │       │   │   │   ├── download.py
    │       │   │   │   ├── lazy_wheel.py
    │       │   │   │   ├── session.py
    │       │   │   │   ├── utils.py
    │       │   │   │   └── xmlrpc.py
    │       │   │   ├── operations
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── build
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── build_tracker.py
    │       │   │   │   │   ├── metadata.py
    │       │   │   │   │   ├── metadata_editable.py
    │       │   │   │   │   ├── metadata_legacy.py
    │       │   │   │   │   ├── wheel.py
    │       │   │   │   │   ├── wheel_editable.py
    │       │   │   │   │   └── wheel_legacy.py
    │       │   │   │   ├── check.py
    │       │   │   │   ├── freeze.py
    │       │   │   │   ├── install
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── editable_legacy.py
    │       │   │   │   │   └── wheel.py
    │       │   │   │   └── prepare.py
    │       │   │   ├── pyproject.py
    │       │   │   ├── req
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── constructors.py
    │       │   │   │   ├── req_file.py
    │       │   │   │   ├── req_install.py
    │       │   │   │   ├── req_set.py
    │       │   │   │   └── req_uninstall.py
    │       │   │   ├── resolution
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── base.py
    │       │   │   │   ├── legacy
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   └── resolver.py
    │       │   │   │   └── resolvelib
    │       │   │   │       ├── __init__.py
    │       │   │   │       ├── base.py
    │       │   │   │       ├── candidates.py
    │       │   │   │       ├── factory.py
    │       │   │   │       ├── found_candidates.py
    │       │   │   │       ├── provider.py
    │       │   │   │       ├── reporter.py
    │       │   │   │       ├── requirements.py
    │       │   │   │       └── resolver.py
    │       │   │   ├── self_outdated_check.py
    │       │   │   ├── utils
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _jaraco_text.py
    │       │   │   │   ├── _log.py
    │       │   │   │   ├── appdirs.py
    │       │   │   │   ├── compat.py
    │       │   │   │   ├── compatibility_tags.py
    │       │   │   │   ├── datetime.py
    │       │   │   │   ├── deprecation.py
    │       │   │   │   ├── direct_url_helpers.py
    │       │   │   │   ├── egg_link.py
    │       │   │   │   ├── entrypoints.py
    │       │   │   │   ├── filesystem.py
    │       │   │   │   ├── filetypes.py
    │       │   │   │   ├── glibc.py
    │       │   │   │   ├── hashes.py
    │       │   │   │   ├── logging.py
    │       │   │   │   ├── misc.py
    │       │   │   │   ├── packaging.py
    │       │   │   │   ├── retry.py
    │       │   │   │   ├── setuptools_build.py
    │       │   │   │   ├── subprocess.py
    │       │   │   │   ├── temp_dir.py
    │       │   │   │   ├── unpacking.py
    │       │   │   │   ├── urls.py
    │       │   │   │   ├── virtualenv.py
    │       │   │   │   └── wheel.py
    │       │   │   ├── vcs
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── bazaar.py
    │       │   │   │   ├── git.py
    │       │   │   │   ├── mercurial.py
    │       │   │   │   ├── subversion.py
    │       │   │   │   └── versioncontrol.py
    │       │   │   └── wheel_builder.py
    │       │   ├── _vendor
    │       │   │   ├── __init__.py
    │       │   │   ├── cachecontrol
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _cmd.py
    │       │   │   │   ├── adapter.py
    │       │   │   │   ├── cache.py
    │       │   │   │   ├── caches
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── file_cache.py
    │       │   │   │   │   └── redis_cache.py
    │       │   │   │   ├── controller.py
    │       │   │   │   ├── filewrapper.py
    │       │   │   │   ├── heuristics.py
    │       │   │   │   ├── py.typed
    │       │   │   │   ├── serialize.py
    │       │   │   │   └── wrapper.py
    │       │   │   ├── certifi
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __main__.py
    │       │   │   │   ├── cacert.pem
    │       │   │   │   ├── core.py
    │       │   │   │   └── py.typed
    │       │   │   ├── distlib
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── compat.py
    │       │   │   │   ├── database.py
    │       │   │   │   ├── index.py
    │       │   │   │   ├── locators.py
    │       │   │   │   ├── manifest.py
    │       │   │   │   ├── markers.py
    │       │   │   │   ├── metadata.py
    │       │   │   │   ├── resources.py
    │       │   │   │   ├── scripts.py
    │       │   │   │   ├── t32.exe
    │       │   │   │   ├── t64-arm.exe
    │       │   │   │   ├── t64.exe
    │       │   │   │   ├── util.py
    │       │   │   │   ├── version.py
    │       │   │   │   ├── w32.exe
    │       │   │   │   ├── w64-arm.exe
    │       │   │   │   ├── w64.exe
    │       │   │   │   └── wheel.py
    │       │   │   ├── distro
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __main__.py
    │       │   │   │   ├── distro.py
    │       │   │   │   └── py.typed
    │       │   │   ├── idna
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── codec.py
    │       │   │   │   ├── compat.py
    │       │   │   │   ├── core.py
    │       │   │   │   ├── idnadata.py
    │       │   │   │   ├── intranges.py
    │       │   │   │   ├── package_data.py
    │       │   │   │   ├── py.typed
    │       │   │   │   └── uts46data.py
    │       │   │   ├── msgpack
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── exceptions.py
    │       │   │   │   ├── ext.py
    │       │   │   │   └── fallback.py
    │       │   │   ├── packaging
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _elffile.py
    │       │   │   │   ├── _manylinux.py
    │       │   │   │   ├── _musllinux.py
    │       │   │   │   ├── _parser.py
    │       │   │   │   ├── _structures.py
    │       │   │   │   ├── _tokenizer.py
    │       │   │   │   ├── licenses
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   └── _spdx.py
    │       │   │   │   ├── markers.py
    │       │   │   │   ├── metadata.py
    │       │   │   │   ├── py.typed
    │       │   │   │   ├── requirements.py
    │       │   │   │   ├── specifiers.py
    │       │   │   │   ├── tags.py
    │       │   │   │   ├── utils.py
    │       │   │   │   └── version.py
    │       │   │   ├── pkg_resources
    │       │   │   │   └── __init__.py
    │       │   │   ├── platformdirs
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __main__.py
    │       │   │   │   ├── android.py
    │       │   │   │   ├── api.py
    │       │   │   │   ├── macos.py
    │       │   │   │   ├── py.typed
    │       │   │   │   ├── unix.py
    │       │   │   │   ├── version.py
    │       │   │   │   └── windows.py
    │       │   │   ├── pygments
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __main__.py
    │       │   │   │   ├── cmdline.py
    │       │   │   │   ├── console.py
    │       │   │   │   ├── filter.py
    │       │   │   │   ├── filters
    │       │   │   │   │   └── __init__.py
    │       │   │   │   ├── formatter.py
    │       │   │   │   ├── formatters
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── _mapping.py
    │       │   │   │   │   ├── bbcode.py
    │       │   │   │   │   ├── groff.py
    │       │   │   │   │   ├── html.py
    │       │   │   │   │   ├── img.py
    │       │   │   │   │   ├── irc.py
    │       │   │   │   │   ├── latex.py
    │       │   │   │   │   ├── other.py
    │       │   │   │   │   ├── pangomarkup.py
    │       │   │   │   │   ├── rtf.py
    │       │   │   │   │   ├── svg.py
    │       │   │   │   │   ├── terminal.py
    │       │   │   │   │   └── terminal256.py
    │       │   │   │   ├── lexer.py
    │       │   │   │   ├── lexers
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── _mapping.py
    │       │   │   │   │   └── python.py
    │       │   │   │   ├── modeline.py
    │       │   │   │   ├── plugin.py
    │       │   │   │   ├── regexopt.py
    │       │   │   │   ├── scanner.py
    │       │   │   │   ├── sphinxext.py
    │       │   │   │   ├── style.py
    │       │   │   │   ├── styles
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   └── _mapping.py
    │       │   │   │   ├── token.py
    │       │   │   │   ├── unistring.py
    │       │   │   │   └── util.py
    │       │   │   ├── pyproject_hooks
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _impl.py
    │       │   │   │   ├── _in_process
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   └── _in_process.py
    │       │   │   │   └── py.typed
    │       │   │   ├── requests
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __version__.py
    │       │   │   │   ├── _internal_utils.py
    │       │   │   │   ├── adapters.py
    │       │   │   │   ├── api.py
    │       │   │   │   ├── auth.py
    │       │   │   │   ├── certs.py
    │       │   │   │   ├── compat.py
    │       │   │   │   ├── cookies.py
    │       │   │   │   ├── exceptions.py
    │       │   │   │   ├── help.py
    │       │   │   │   ├── hooks.py
    │       │   │   │   ├── models.py
    │       │   │   │   ├── packages.py
    │       │   │   │   ├── sessions.py
    │       │   │   │   ├── status_codes.py
    │       │   │   │   ├── structures.py
    │       │   │   │   └── utils.py
    │       │   │   ├── resolvelib
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── compat
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   └── collections_abc.py
    │       │   │   │   ├── providers.py
    │       │   │   │   ├── py.typed
    │       │   │   │   ├── reporters.py
    │       │   │   │   ├── resolvers.py
    │       │   │   │   └── structs.py
    │       │   │   ├── rich
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── __main__.py
    │       │   │   │   ├── _cell_widths.py
    │       │   │   │   ├── _emoji_codes.py
    │       │   │   │   ├── _emoji_replace.py
    │       │   │   │   ├── _export_format.py
    │       │   │   │   ├── _extension.py
    │       │   │   │   ├── _fileno.py
    │       │   │   │   ├── _inspect.py
    │       │   │   │   ├── _log_render.py
    │       │   │   │   ├── _loop.py
    │       │   │   │   ├── _null_file.py
    │       │   │   │   ├── _palettes.py
    │       │   │   │   ├── _pick.py
    │       │   │   │   ├── _ratio.py
    │       │   │   │   ├── _spinners.py
    │       │   │   │   ├── _stack.py
    │       │   │   │   ├── _timer.py
    │       │   │   │   ├── _win32_console.py
    │       │   │   │   ├── _windows.py
    │       │   │   │   ├── _windows_renderer.py
    │       │   │   │   ├── _wrap.py
    │       │   │   │   ├── abc.py
    │       │   │   │   ├── align.py
    │       │   │   │   ├── ansi.py
    │       │   │   │   ├── bar.py
    │       │   │   │   ├── box.py
    │       │   │   │   ├── cells.py
    │       │   │   │   ├── color.py
    │       │   │   │   ├── color_triplet.py
    │       │   │   │   ├── columns.py
    │       │   │   │   ├── console.py
    │       │   │   │   ├── constrain.py
    │       │   │   │   ├── containers.py
    │       │   │   │   ├── control.py
    │       │   │   │   ├── default_styles.py
    │       │   │   │   ├── diagnose.py
    │       │   │   │   ├── emoji.py
    │       │   │   │   ├── errors.py
    │       │   │   │   ├── file_proxy.py
    │       │   │   │   ├── filesize.py
    │       │   │   │   ├── highlighter.py
    │       │   │   │   ├── json.py
    │       │   │   │   ├── jupyter.py
    │       │   │   │   ├── layout.py
    │       │   │   │   ├── live.py
    │       │   │   │   ├── live_render.py
    │       │   │   │   ├── logging.py
    │       │   │   │   ├── markup.py
    │       │   │   │   ├── measure.py
    │       │   │   │   ├── padding.py
    │       │   │   │   ├── pager.py
    │       │   │   │   ├── palette.py
    │       │   │   │   ├── panel.py
    │       │   │   │   ├── pretty.py
    │       │   │   │   ├── progress.py
    │       │   │   │   ├── progress_bar.py
    │       │   │   │   ├── prompt.py
    │       │   │   │   ├── protocol.py
    │       │   │   │   ├── py.typed
    │       │   │   │   ├── region.py
    │       │   │   │   ├── repr.py
    │       │   │   │   ├── rule.py
    │       │   │   │   ├── scope.py
    │       │   │   │   ├── screen.py
    │       │   │   │   ├── segment.py
    │       │   │   │   ├── spinner.py
    │       │   │   │   ├── status.py
    │       │   │   │   ├── style.py
    │       │   │   │   ├── styled.py
    │       │   │   │   ├── syntax.py
    │       │   │   │   ├── table.py
    │       │   │   │   ├── terminal_theme.py
    │       │   │   │   ├── text.py
    │       │   │   │   ├── theme.py
    │       │   │   │   ├── themes.py
    │       │   │   │   ├── traceback.py
    │       │   │   │   └── tree.py
    │       │   │   ├── tomli
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _parser.py
    │       │   │   │   ├── _re.py
    │       │   │   │   ├── _types.py
    │       │   │   │   └── py.typed
    │       │   │   ├── truststore
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _api.py
    │       │   │   │   ├── _macos.py
    │       │   │   │   ├── _openssl.py
    │       │   │   │   ├── _ssl_constants.py
    │       │   │   │   ├── _windows.py
    │       │   │   │   └── py.typed
    │       │   │   ├── typing_extensions.py
    │       │   │   ├── urllib3
    │       │   │   │   ├── __init__.py
    │       │   │   │   ├── _collections.py
    │       │   │   │   ├── _version.py
    │       │   │   │   ├── connection.py
    │       │   │   │   ├── connectionpool.py
    │       │   │   │   ├── contrib
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── _appengine_environ.py
    │       │   │   │   │   ├── _securetransport
    │       │   │   │   │   │   ├── __init__.py
    │       │   │   │   │   │   ├── bindings.py
    │       │   │   │   │   │   └── low_level.py
    │       │   │   │   │   ├── appengine.py
    │       │   │   │   │   ├── ntlmpool.py
    │       │   │   │   │   ├── pyopenssl.py
    │       │   │   │   │   ├── securetransport.py
    │       │   │   │   │   └── socks.py
    │       │   │   │   ├── exceptions.py
    │       │   │   │   ├── fields.py
    │       │   │   │   ├── filepost.py
    │       │   │   │   ├── packages
    │       │   │   │   │   ├── __init__.py
    │       │   │   │   │   ├── backports
    │       │   │   │   │   │   ├── __init__.py
    │       │   │   │   │   │   ├── makefile.py
    │       │   │   │   │   │   └── weakref_finalize.py
    │       │   │   │   │   └── six.py
    │       │   │   │   ├── poolmanager.py
    │       │   │   │   ├── request.py
    │       │   │   │   ├── response.py
    │       │   │   │   └── util
    │       │   │   │       ├── __init__.py
    │       │   │   │       ├── connection.py
    │       │   │   │       ├── proxy.py
    │       │   │   │       ├── queue.py
    │       │   │   │       ├── request.py
    │       │   │   │       ├── response.py
    │       │   │   │       ├── retry.py
    │       │   │   │       ├── ssl_.py
    │       │   │   │       ├── ssl_match_hostname.py
    │       │   │   │       ├── ssltransport.py
    │       │   │   │       ├── timeout.py
    │       │   │   │       ├── url.py
    │       │   │   │       └── wait.py
    │       │   │   └── vendor.txt
    │       │   └── py.typed
    │       └── pip-25.0.1.dist-info
    │           ├── AUTHORS.txt
    │           ├── INSTALLER
    │           ├── LICENSE.txt
    │           ├── METADATA
    │           ├── RECORD
    │           ├── REQUESTED
    │           ├── WHEEL
    │           ├── entry_points.txt
    │           └── top_level.txt
    ├── Scripts
    │   ├── Activate.ps1
    │   ├── activate
    │   ├── activate.bat
    │   ├── activate.fish
    │   ├── deactivate.bat
    │   ├── pip.exe
    │   ├── pip3.13.exe
    │   ├── pip3.exe
    │   ├── python.exe
    │   └── pythonw.exe
    └── pyvenv.cfg
```
