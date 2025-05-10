# 📊 Diagnostica progetto CarbonPilot
- 📆 Generato il: `2025-05-10 19:27:10`

## 📁 Struttura progetto
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
│   │   ├── script.py.mako
│   │   └── versions
│   │       ├── 455e264c6e0c_add_valves_required_to_part_remove_num_.py
│   │       └── 99913743b1c6_add_nesting_models.py
│   ├── alembic.ini
│   ├── api
│   │   └── nesting.py
│   ├── crud
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── parts.py
│   │   └── schedules.py
│   ├── database.py
│   ├── main.py
│   ├── models
│   │   ├── __init__.py
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── nesting.py
│   │   ├── part.py
│   │   └── schedule.py
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
│   ├── services
│   │   ├── nesting.py
│   │   └── pdf_report.py
│   └── venv
│       └── Lib
│           └── site-packages
│               ├── alembic
│               │   ├── autogenerate
│               │   ├── ddl
│               │   ├── operations
│               │   ├── runtime
│               │   ├── script
│               │   ├── templates
│               │   │   ├── async
│               │   │   ├── generic
│               │   │   └── multidb
│               │   ├── testing
│               │   │   ├── plugin
│               │   │   └── suite
│               │   └── util
│               ├── annotated_types
│               ├── anyio
│               │   ├── _backends
│               │   ├── _core
│               │   ├── abc
│               │   └── streams
│               ├── click
│               ├── colorama
│               │   └── tests
│               ├── dotenv
│               ├── fastapi
│               │   ├── dependencies
│               │   ├── middleware
│               │   ├── openapi
│               │   └── security
│               ├── greenlet
│               │   ├── _greenlet.cp312-win_amd64.pyd
│               │   ├── platform
│               │   └── tests
│               │       ├── _test_extension.cp312-win_amd64.pyd
│               │       └── _test_extension_cpp.cp312-win_amd64.pyd
│               ├── h11
│               ├── idna
│               ├── mako
│               │   ├── ext
│               │   └── testing
│               ├── markupsafe
│               │   └── _speedups.cp312-win_amd64.pyd
│               ├── pip
│               │   ├── _internal
│               │   │   ├── cli
│               │   │   ├── commands
│               │   │   ├── distributions
│               │   │   ├── index
│               │   │   ├── locations
│               │   │   ├── metadata
│               │   │   │   └── importlib
│               │   │   ├── models
│               │   │   ├── network
│               │   │   ├── operations
│               │   │   │   ├── build
│               │   │   │   └── install
│               │   │   ├── req
│               │   │   ├── resolution
│               │   │   │   ├── legacy
│               │   │   │   └── resolvelib
│               │   │   ├── utils
│               │   │   └── vcs
│               │   └── _vendor
│               │       ├── cachecontrol
│               │       │   └── caches
│               │       ├── certifi
│               │       ├── distlib
│               │       ├── distro
│               │       ├── idna
│               │       ├── msgpack
│               │       ├── packaging
│               │       │   └── licenses
│               │       ├── pkg_resources
│               │       ├── platformdirs
│               │       ├── pygments
│               │       │   ├── filters
│               │       │   ├── formatters
│               │       │   ├── lexers
│               │       │   └── styles
│               │       ├── pyproject_hooks
│               │       │   └── _in_process
│               │       ├── requests
│               │       ├── resolvelib
│               │       │   └── compat
│               │       ├── rich
│               │       ├── tomli
│               │       ├── truststore
│               │       └── urllib3
│               │           ├── contrib
│               │           │   └── _securetransport
│               │           ├── packages
│               │           │   └── backports
│               │           └── util
│               ├── psycopg2
│               │   └── _psycopg.cp312-win_amd64.pyd
│               ├── pydantic
│               │   ├── _internal
│               │   ├── deprecated
│               │   ├── experimental
│               │   ├── plugin
│               │   └── v1
│               ├── pydantic_core
│               │   └── _pydantic_core.cp312-win_amd64.pyd
│               ├── sniffio
│               │   └── _tests
│               ├── sqlalchemy
│               │   ├── connectors
│               │   ├── cyextension
│               │   │   ├── collections.cp312-win_amd64.pyd
│               │   │   ├── immutabledict.cp312-win_amd64.pyd
│               │   │   ├── processors.cp312-win_amd64.pyd
│               │   │   ├── resultproxy.cp312-win_amd64.pyd
│               │   │   └── util.cp312-win_amd64.pyd
│               │   ├── dialects
│               │   │   ├── mssql
│               │   │   ├── mysql
│               │   │   ├── oracle
│               │   │   ├── postgresql
│               │   │   └── sqlite
│               │   ├── engine
│               │   ├── event
│               │   ├── ext
│               │   │   ├── asyncio
│               │   │   ├── declarative
│               │   │   └── mypy
│               │   ├── future
│               │   ├── orm
│               │   ├── pool
│               │   ├── sql
│               │   ├── testing
│               │   │   ├── fixtures
│               │   │   ├── plugin
│               │   │   └── suite
│               │   └── util
│               ├── starlette
│               │   └── middleware
│               ├── typing_inspection
│               └── uvicorn
│                   ├── lifespan
│                   ├── loops
│                   ├── middleware
│                   ├── protocols
│                   │   ├── http
│                   │   └── websockets
│                   └── supervisors
├── changelog.md
├── docker-compose.yml
├── frontend
│   ├── .dockerignore
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
│   │   │   │   ├── edit
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── schedules
│   │       ├── layout.tsx
│   │       ├── new
│   │       │   └── page.tsx
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
│   ├── jsconfig.json
│   ├── lib
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── next.config.js
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.js
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── types
│       ├── autoclave.ts
│       ├── catalog_part.ts
│       ├── nesting.ts
│       ├── part.ts
│       ├── react-big-calendar.d.ts
│       └── schedule.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── regole_progetto.md
├── requirements.txt
├── roadmap_progetto.md
├── setup-dev.ps1
├── structure_snapshot.md
└── tools
    ├── carbonpilot_manager.py
    └── types_backup
        ├── autoclave.ts
        ├── catalog_part.ts
        ├── nesting.ts
        ├── part.ts
        ├── react-big-calendar.d.ts
        └── schedule.ts
```

## 🔄 Confronto `autoclave` (Model vs Schema)
- `Config` presente nello schema ma non nel model

## 🔄 Confronto `catalog_part` (Model vs Schema)
- `Config` presente nello schema ma non nel model

## 🔄 Confronto `part` (Model vs Schema)
- `Config` presente nello schema ma non nel model

## 🔄 Confronto `schedule` (Model vs Schema)
- `Config` presente nello schema ma non nel model
- `part_ids` presente nello schema ma non nel model

## 🔗 Verifica API vs backend
- `` definito nei router ma non usato in `lib/api.ts`
- `nesting/pdf` definito nei router ma non usato in `lib/api.ts`
- `report` definito nei router ma non usato in `lib/api.ts`
- `{autoclave_id}` definito nei router ma non usato in `lib/api.ts`
- `{catalog_part_id}` definito nei router ma non usato in `lib/api.ts`
- `{part_id}` definito nei router ma non usato in `lib/api.ts`
- `{schedule_id}` definito nei router ma non usato in `lib/api.ts`
- `${BASE_URL}/autoclaves` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/catalog_parts` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/nesting` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/nesting/report` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/parts` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/parts/${id}` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/schedules` usato in `lib/api.ts` ma non definito nei router

## ❗ Import di simbolo non esportato: `useEffect` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `createAutoclave` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `getCatalogParts` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `createCatalogPart` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `runNesting` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `createPart` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `getCatalogParts` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useParams` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `getPartById` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useParams` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `getPartById` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `updatePart` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `Calendar` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `momentLocalizer` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `Event as CalendarEvent` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `getSchedules` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `createSchedule` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `schedules/new/page.tsx`
